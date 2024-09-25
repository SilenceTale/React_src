import Box from "./box";

//box -w,h,b[red,blue,green,orange],글
function App() {
  return (
    <div>
      <Box backgroundColor="red" height="100px" width="100px" text="빨랭이" />
      <Box backgroundColor="blue" height="100px" width="100px" text="퍼랭이" />
      <Box
        backgroundColor="orange"
        height="100px"
        width="100px"
        text="오랭이"
      />
      <Box backgroundColor="green" height="100px" width="100px" text="초랭이" />
    </div>
  );
}

export default App;
