import React from 'react';
import FabMenu from '../components/FabMenu/FabMenu';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAddExpense: () => void;
  onAddGroup: () => void;
};

const FabMenuContainer = ({ visible, onClose, onAddExpense, onAddGroup }: Props) => {
  return (
    <FabMenu
      visible={visible}
      onClose={onClose}
      onAddExpense={onAddExpense}
      onAddGroup={onAddGroup}
    />
  );
};

export default FabMenuContainer;
