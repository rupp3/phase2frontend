import Header from "./components/Header";
import ButtonGroup from "./components/ButtonGroup";
import Content from "./components/Content";
import SubHeader from "./components/SubHeader";

function App(){
  /*
  let items = ["package1", "package2", "package3"];
  let package_name = "package1";
  let package_description = "this is a package";

  const handleSelectItem = (item: string) => {
    console.log(item);

    <SearchBar></SearchBar>
    <Button onClick={()=> console.log('clicked download')}>Download</Button>
    <Button onClick={()=> console.log('clicked upload')}>Upload</Button>
    <Button onClick={()=> console.log('clicked update')}>Update</Button>
    <Button onClick={()=> console.log('clicked rate')}>Rate</Button>
  } */
  return <div>
      <Header />
      <ButtonGroup />
      <div className="divider" />
      <SubHeader />

    </div>
}

export default App;