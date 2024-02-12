import React from 'react';
import { TheadValueCharacteristics } from '../../constants';
import { useAppSelector } from '../../hooks';
import { TableDescription } from './Table';

interface CharacteristicsProps {
  showTableToIndex: number;
  // setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Characteristics = ({ showTableToIndex }: CharacteristicsProps) => {
  const TrainsData = useAppSelector((state) => state.getTrains.list);
  const descriptionCaption = TrainsData[showTableToIndex].name;

  return (
    <>
      <TableDescription
        descriptionCaption={descriptionCaption}
        showTableToIndex={showTableToIndex}
        theadValue={TheadValueCharacteristics}
        tbodyValue={TrainsData}
      />
    </>
  );
};
