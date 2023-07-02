interface itemProps {
  id: number;
  content: string;
}

interface ListProps {
  items: itemProps[];
  deleteItem: (index: number) => void;
}
const List: React.FC<ListProps> = ({ items, deleteItem }) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            <span>{item.content}</span>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => deleteItem(item.id)}
            >
              Done
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
