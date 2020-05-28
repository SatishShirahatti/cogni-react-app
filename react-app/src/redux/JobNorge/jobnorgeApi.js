
const fetchJobData = async() =>{

	try {
		const response = await fetch("https://dev-api.wideroe.no/jobbnorge/v1/jobs/retrieve?language=nb", 
{
	method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
}	
);
		debugger;
		const jobNorgeList= response.json();
		console.log("r", jobNorgeList)
		return jobNorgeList;

		
	} catch (error) {
			console.log(error)
	}
}

export default fetchJobData;