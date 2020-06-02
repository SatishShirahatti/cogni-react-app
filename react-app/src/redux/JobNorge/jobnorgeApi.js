
const fetchJobNorgeData = async() =>{
//https://dev-api.wideroe.no/jobbnorge/v1/jobs/retrieve?language=nb
//https://dev-api.wideroe.no/booking/allairports
console.log("fetch");
	try {
		const response = await fetch("https://dev-api.wideroe.no/jobbnorge/v1/jobs/retrieve?language=nb");
		const data= response.json();
		return data;

		
	} catch (error) {
			console.log(error)
	}
}

export default fetchJobNorgeData;