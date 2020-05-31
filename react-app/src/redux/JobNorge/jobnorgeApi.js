
const fetchJobNorgeData = async() =>{
//https://dev-api.wideroe.no/jobbnorge/v1/jobs/retrieve?language=nb
console.log("fetch");
	try {
		const response = await fetch("https://dev-api.wideroe.no/jobbnorge/v1/jobs/retrieve?language=nb");
		const JobNorgeData= response.json();
		return JobNorgeData;

		
	} catch (error) {
			console.log(error)
	}
}

export default fetchJobNorgeData;