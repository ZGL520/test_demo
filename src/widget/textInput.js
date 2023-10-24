import './textInput.css'
export default function (props, item) {
  return (
    <div className="input_box">
      <p className="input_box_name">{props.item.name}</p>
      <input type="text" onChange={(e) => {
        props.item.value = e.target.value;
        props.onChange(props.item);
      }
      } />
    </div>
  );
}