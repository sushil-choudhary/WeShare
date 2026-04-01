import React from 'react';
import { Modal, Pressable, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../theme/themeProvider';
import { createFabMenuStyles } from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAddExpense: () => void;
  onAddGroup: () => void;
};

const FabMenu = ({ visible, onClose, onAddExpense, onAddGroup }: Props) => {
  const { colors } = useTheme();
  const styles = createFabMenuStyles(colors);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={onAddExpense}>
            <Text style={styles.menuText}>Add Expense</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={onAddGroup}>
            <Text style={styles.menuText}>Add Group</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default FabMenu;
