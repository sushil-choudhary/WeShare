import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createGroupStyles } from './styles';
import { COLORS } from '../../theme/color';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackIcon } from '../../assets/svg/Svg';
import { useNavigation } from '@react-navigation/native';

const groupTypes = ['Trip', 'Home', 'Friends', 'Office', 'Other'];
const splitTypes = ['Equal', 'Unequal', 'Percentage', 'Shares'];

const initialMembers = ['Rahul', 'Priya'];

const CreateGroupScreen = () => {
  const colors = COLORS;
  const styles = createGroupStyles(colors);
  const navigation = useNavigation();
  const [groupName, setGroupName] = useState('');
  const [groupType, setGroupType] = useState('Trip');
  const [currency, setCurrency] = useState('INR ₹');
  const [members, setMembers] = useState<string[]>(initialMembers);
  const [newMember, setNewMember] = useState('');
  const [splitType, setSplitType] = useState('Equal');

  const handleAddMember = () => {
    const trimmed = newMember.trim();

    if (!trimmed) return;
    if (members.includes(trimmed)) return;

    setMembers([...members, trimmed]);
    setNewMember('');
  };

  const handleRemoveMember = (member: string) => {
    setMembers(members.filter((item) => item !== member));
  };

  const handleCreateGroup = () => {
    const payload = {
      groupName,
      groupType,
      currency,
      members,
      splitType,
    };

    console.log('Create Group Payload:', payload);
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
        >
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Create Group</Text>
          <Text style={styles.subtitle}>Track shared expenses with your group</Text>
        </View>
      </View>
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.label}>Group Name</Text>
          <TextInput
            placeholder="e.g. Goa Trip"
            placeholderTextColor={colors.muted}
            value={groupName}
            onChangeText={setGroupName}
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Group Type</Text>
          <View style={styles.optionWrap}>
            {groupTypes.map((type) => {
              const isSelected = groupType === type;
              return (
                <TouchableOpacity
                  key={type}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => setGroupType(type)}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Currency</Text>
          <TextInput
            placeholder="INR ₹"
            placeholderTextColor={colors.muted}
            value={currency}
            onChangeText={setCurrency}
            style={styles.input}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Members</Text>

          <View style={styles.memberInputRow}>
            <TextInput
              placeholder="Enter member name"
              placeholderTextColor={colors.muted}
              value={newMember}
              onChangeText={setNewMember}
              style={[styles.input, styles.memberInput]}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddMember}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.memberWrap}>
            {members.map((member) => (
              <View key={member} style={styles.memberChip}>
                <Text style={styles.memberChipText}>{member}</Text>
                <TouchableOpacity onPress={() => handleRemoveMember(member)}>
                  <Text style={styles.removeText}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Default Split Type</Text>
          <View style={styles.optionWrap}>
            {splitTypes.map((type) => {
              const isSelected = splitType === type;
              return (
                <TouchableOpacity
                  key={type}
                  style={[styles.chip, isSelected && styles.chipSelected]}
                  onPress={() => setSplitType(type)}
                >
                  <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.primaryButton} onPress={handleCreateGroup}>
        <Text style={styles.primaryButtonText}>Create Group</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CreateGroupScreen;
