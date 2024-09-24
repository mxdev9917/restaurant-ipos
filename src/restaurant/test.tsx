import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialRows = [
  { id: 'row-1', cells: ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'] },
  { id: 'row-2', cells: ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'] },
  { id: 'row-3', cells: ['Row 3, Cell 1', 'Row 3, Cell 2', 'Row 3, Cell 3'] },
];

const initialColumns = ['Column 1', 'Column 2', 'Column 3'];

const test = () => {
  const [rows, setRows] = useState(initialRows);
  const [columns, setColumns] = useState(initialColumns);

  const onRowDragEnd = (result:any) => {
    if (!result.destination) return;

    const reorderedRows = Array.from(rows);
    const [removed] = reorderedRows.splice(result.source.index, 1);
    reorderedRows.splice(result.destination.index, 0, removed);

    setRows(reorderedRows);
  };

  const onColumnDragEnd = (result:any) => {
    if (!result.destination) return;

    const reorderedColumns = Array.from(columns);
    const [removed] = reorderedColumns.splice(result.source.index, 1);
    reorderedColumns.splice(result.destination.index, 0, removed);

    setColumns(reorderedColumns);
  };

  return (
    <DragDropContext
      onDragEnd={(result) => {
        if (result.type === 'ROW') {
          onRowDragEnd(result);
        } else if (result.type === 'COLUMN') {
          onColumnDragEnd(result);
        }
      }}
    >
      <Droppable droppableId="columns" direction="horizontal" type="COLUMN">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{ display: 'flex' }}>
            {columns.map((column, index) => (
              <Draggable key={column} draggableId={column} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: '8px',
                      border: '1px solid lightgray',
                      marginRight: '8px',
                      backgroundColor: 'white',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {column}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="rows" type="ROW">
        {(provided) => (
          <table ref={provided.innerRef} {...provided.droppableProps}>
            <tbody>
              {rows.map((row, rowIndex) => (
                <Draggable key={row.id} draggableId={row.id} index={rowIndex}>
                  {(provided) => (
                    <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={cellIndex} style={{ border: '1px solid lightgray', padding: '8px' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  )}
                </Draggable>
              ))}
            </tbody>
            {provided.placeholder}
          </table>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default test;
