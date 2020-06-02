
const fetchData = async() =>{
//https://dev-api.wideroe.no/jobbnorge/v1/jobs/retrieve?language=nb
//https://dev-api.wideroe.no/booking/allairports"
	try {
		const response = await fetch("https://dev-api.wideroe.no/booking/allairports");
		const airportList= response.json();
		return airportList;

		
	} catch (error) {
			console.log(error)
	}
}

export default fetchData;