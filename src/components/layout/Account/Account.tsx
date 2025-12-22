import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS1, styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { formatCurrency } from '../../../utils/helpers';
import { Account, Actions, Preferences, Records, Support } from '../../../utils/constant';

const ProfileScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>

          <View style={styles.profileSection}>
            <Image source={{ uri: `https://i.pravatar.cc/150?img=12` }} style={styles.avatar} />

            <View style={styles.nameRow}>
              <Text style={styles.name}>John Doe</Text>
              <Ionicons name="checkmark-circle" size={16} color="#2ecc71" />
            </View>

            <Text style={styles.username}>john@gmail.com</Text>
          </View>

          <View style={styles.paymentCard}>
            <View style={styles.total}>
              <Text style={styles.totalLabel}>{'Total Balance: '}</Text>
              <Text style={styles.totalValue}>{formatCurrency(3728, 'en-IN', 'INR')}</Text>
            </View>
            <View style={styles.statsCard}>
              <StatItem count="3000" label="You Owe" type="owe" />
              <StatItem count="728" label="You Get" type="get" />
            </View>
          </View>

          <>
            <Text style={styles.label}>{'Preferences'}</Text>
            <View style={styles.menu}>
              {Preferences.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <View style={styles.menuLeft}>
                    <Ionicons name={item.icon} size={20} color={COLORS1.primary} />
                    <Text style={styles.menuText}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>
              ))}
            </View>
          </>
          <>
            <Text style={styles.label}>{'Account'}</Text>
            <View style={styles.menu}>
              {Account.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <View style={styles.menuLeft}>
                    <Ionicons name={item.icon} size={20} color={COLORS1.primary} />
                    <Text style={styles.menuText}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>
              ))}
            </View>
          </>
          <>
            <Text style={styles.label}>{'Records'}</Text>
            <View style={styles.menu}>
              {Records.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <View style={styles.menuLeft}>
                    <Ionicons name={item.icon} size={20} color={COLORS1.primary} />
                    <Text style={styles.menuText}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>
              ))}
            </View>
          </>
          <>
            <Text style={styles.label}>{'Support'}</Text>
            <View style={styles.menu}>
              {Support.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <View style={styles.menuLeft}>
                    <Ionicons name={item.icon} size={20} color={COLORS1.primary} />
                    <Text style={styles.menuText}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>
              ))}
            </View>
          </>
          <>
            <Text style={styles.label}>{'Actions'}</Text>
            <View style={styles.actionMenu}>
              {Actions.map((item, index) => (
                <TouchableOpacity key={index} style={styles.menuItem}>
                  <View style={styles.menuLeft}>
                    <Ionicons name={item.icon} size={20} color={COLORS1.danger} />

                    <Text style={styles.actionMenuText}>{item.label}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>
              ))}
            </View>
          </>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const StatItem = ({ count, label, type }: { count: string; label: string; type: string }) => (
  <View
    style={[
      styles.statItem,
      type === 'total' ? styles.totalItem : type === 'owe' ? styles.oweItem : styles.getItem,
    ]}
  >
    <Text style={styles.statCount}>{label}</Text>
    <Text style={styles.statLabel}>{formatCurrency(count, 'en-IN', 'INR')}</Text>
  </View>
);

export default ProfileScreen;
