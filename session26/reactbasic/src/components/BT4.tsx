
export default function BT4() {
  const red = {
    backgroundColor: "red",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const blue = {
    backgroundColor: "blue",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const green = {
    backgroundColor: "green",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const row = {
    display: "flex",
  }

  return (
    <>
      <div style={row}>
        <div style={red}>red</div>
        <div style={blue}>blue</div>
        <div style={green}>green</div>
      </div>
      
    </>
  );
}