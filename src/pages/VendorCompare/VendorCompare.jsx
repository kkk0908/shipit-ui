import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import SearchBar from "../../components/VendorCompare/SearchBar/SearchBar";
import VendorTable from "../../components/VendorCompare/VendorTable/VendorTable";

export default function VendorCompare(){
    return(
        <div>
            <MainMenu isWhite/>
            <SearchBar />
            <VendorTable />
        </div>
    );
}