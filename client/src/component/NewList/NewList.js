import React from "react";
import Select from "react-select";

// const getInputValue = () => {
//     let inputValue = {
//         "property_address" : document.getElementById("property_address"),
//         "property_postcode": document.getElementById("property_postcode")
//     }
    
//     return inputValue
// }
class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            postcode: "",
            bedroom: 0,
            bathroom: 0,
            carpark: 0,
            furnish: true,
            owner: null
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log("input values", this.state.address, this.state.postcode);
        this.props.add({
            address: this.state.address,
            postcode: this.state.postcode,
            bedroom: this.state.bedroom,
            bathroom: this.state.bathroom,
            carpark: this.state.carpark,
            furnish: this.state.furnish,
            owner: {
                ownerId: 2,
                ownerFirstName: "Eileen"
            }
        })
    }

    // const newlist = (props) => {

    //     let ownerSummary = props.owners.map(o => {
    //         return {value: o.id, label: o.owner_firstName}
    //     });

    render() {
        return (
            <div>
                <h5>Add Property...</h5>
                <form>
                    <label>Address</label>
                    <input type="text" value={this.state.address} onChange={e => this.setState({ address: e.target.value})}/>
                    <label>Postcode</label>
                    <input type="text" value={this.state.postcode} onChange={e => this.setState({ postcode: e.target.value})}/>
                    <label>Bedroom</label>
                    <input type="number" value={this.state.bedroom} onChange={e => this.setState({ bedroom: e.target.value})}/>
                    <label>Bathroom</label>
                    <input type="number" value={this.state.bathroom} onChange={e => this.setState({ bathroom: e.target.value})}/>
                    <label>Carpark</label>
                    <input type="number" value={this.state.carpark} onChange={e => this.setState({ carpark: e.target.value})}/>
                    <label>Furnish</label>
                    <input type="radio" value={this.state.furnish} onChange={e => this.setState({ furnish: e.target.value})}/>
                    {/* // <label>Owned by</label>
                    // <Select options = {ownerSummary} value={this.state.owner} onChange={e => this.setState({ owner: e.target.value})}/> */}

                    <input type="submit" onClick={e => this.handleFormSubmit(e)}/>
                    {/* <button onClick = {props.cancel}>Cancel</button> */}
                </form>
            </div>
        );
    }
}
export default NewList;