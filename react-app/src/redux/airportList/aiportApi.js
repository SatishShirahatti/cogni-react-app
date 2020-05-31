
const fetchData = async() =>{

	try {
		const response = await fetch("https://dev-api.wideroe.no/booking/allairports");
		const airportList= response.json();
		return airportList;

		
	} catch (error) {
			console.log(error)
	}
}

export default fetchData;