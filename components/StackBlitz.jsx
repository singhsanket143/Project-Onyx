export default function StackBlitz(props) {

  return (
    <iframe
      src={`https://stackblitz.com/edit/${props.name}?embed=1&hideExplorer=${props.hideExplorer ? 1 : 0}&file=${props.openFile}&view=${props.view}&devToolsHeight=${props.showDevtools ? "50" : "0"}`}
      height={props.height || 600}
      style={{ width: "100%" }}
    />
  )
}
