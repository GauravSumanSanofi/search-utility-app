import React, { useEffect, useState } from 'react';

  const SearchCard = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('EPICKey');
    const [searchResults, setSearchResults] = useState([]);
    const [data, setData] = useState('');
    const url = `https://0cb8656b3acdabb71793efed07-integration.eu-west-1.cloud.tibcoapps.com:443/mxypc6zxqw4mivsitdyqi5v3ak3gx6nk/GetEpicDetails/getdata?${searchBy}=${searchTerm}`

    
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSelectChange = (event) => {
      setSearchBy(event.target.value);
    };

    async function fetchData(url) {
        return await fetch(url)
        .then((res) => res.json())
        .then((data) => 
        setData(data)
        )
        .catch((e) => console.log(e));
    }

    const handleSubmit = (event) => {
      event.preventDefault();
     { searchTerm&&fetchData(url);}
    };
  
    return (
      <div>
        <div className='justify-center flex inline-block mt-5 p-5'>
        <form onSubmit={handleSubmit}>
          <select value={searchBy} onChange={handleSelectChange} className='border-solid border-2 border-black-600 px-2'required>
            <option value="EPIC Key">EPIC Key</option>
            <option value="Title">Title</option>
          </select>
          <input
            type="text"
            placeholder={`${searchBy}...`}
            value={searchTerm}
            onChange={(E)=>handleChange(E)}
            className='border-solid border-2 border-black-600 px-2 ml-2'
          />
          <button type="submit" className='border-solid border-2 border-black-600 rounded-full px-2 ml-2'>Search</button>
        </form>
        </div>
        {data ?(<div className='flex flex-col justify-center items-center mt-2 mb-10'>
          <h1 className='text-2xl italic font-bold text-blue-900 mb-3'><strong>Interface Details</strong></h1>
            <div className='w-9/12 border border-gray-300 rounded-md p-4  text-balance ' >
              <h2><strong>Title: </strong>{data.Title}</h2>
              <p><strong>EPIC Key:</strong> {data.EPICKey}</p>
              <p><strong>Tibco EPIC Key:</strong> {data.TibcoEPICKey}</p>
              <p><strong>Summary:</strong> {data.Summary}</p>
              <p><strong>E2E FLOW:</strong> {data.E2EFLOW}</p>
              <p><strong>Business Criticality:</strong> {data.BusinessCriticality}</p>
              <p><strong>OPERATION:</strong> {data.OPERATION}</p>
              <p><strong>GIT Location :</strong>  <a href={data.GIT_LOCATION} className='text-blue-500'> {data.GIT_LOCATION} </a> </p>
              {/* <p><strong>GIT Location MCO:</strong>  <a href={data["GIT LOCATION"].MCO}> {data["GIT LOCATION"].MCO} </a> </p> */}
              <p><strong>Stream(Business Unit):</strong> {data.Stream}</p>
              {/* <p><strong>Release:</strong> {data.Release}</p> */}
              <p><strong>Business Object:</strong> {data.OPERATIONBusiness_Object}</p>
              {/* <p><strong>Interface Type:</strong> {data["Interface Type"]}</p> */}
              {/* <p><strong>Complexity:</strong> {data.Complexity}</p> */}
              {/* <p><strong>Complexity Justification:</strong> {data["Complexity Justification"]}</p> */}
              <p><strong>Source:</strong> {data.Source}</p>
              <p><strong>Source Medium:</strong> {data.SourceMedium}</p>
              <p><strong>Target:</strong> {data.Target}</p>
              <p><strong>Target Medium:</strong> {data.TargetMedium}</p>
              <p><strong>MCI:</strong> {data.MCI}</p>
              <p><strong>MCI Module:</strong> {data.MCIModule}</p>
              <p><strong>MCO:</strong> {data.MCO}</p>
              <p><strong>MCO Module:</strong> {data.MCOModule}</p>
              {/* <p><strong>Transco:</strong> {data.Transco}</p> */}
              <p><strong>Adapter Queue:</strong> {data.AdapterQueue}</p>
              <p><strong>Router Queue:</strong> {data.RouterQueue}</p>
              <p><strong>MCO Queue:</strong> {data.MCOQueue}</p>
              <p><strong>Subscriber Queue:</strong> {data.SubscriberQueue}</p>
              {/* <p><strong>Routed Queue(if any):</strong> {data["Routed Queue(if any)"]}</p> */}
              <p><strong>Input File Location:</strong> {data.InputFileLocation}</p>
              <p><strong>Output File Location:</strong> {data.OutputFilelocation}</p>
              <p><strong>FileName(Input file):</strong> {data.Filename_inputfile}</p>
              <p><strong>FileName(Output File):</strong> {data.Filename_Outputfile}</p>
              <p><strong>IDOC Type:</strong> {data.IDOCType}</p>
              {/* <p><strong>BAPI Name:</strong> {data["BAPI Name"]}</p> */}
              <p><strong>Routing:</strong> {data.Routing}</p>
              <p className='text-ellipsis md:text-clip break-words'><strong>Routing Rule:</strong> {data.RoutingRule}</p>
              {/* text-base leading-tight m-0 whitespace-nowrap overflow-hidden */}
              {/* <p><strong>AIF Rule:</strong> {data["AIF Rule"]}</p> */}
              {/* <p><strong>Evolution_Description:</strong> {data["Evolution_Description"]}</p> */}
              {/* <p><strong>Created:</strong> {data.Created}</p> */}
              <p><strong>FS Path:</strong> <a href={data.FS_PATH} className='text-blue-500'>{data.FS_PATH}</a></p>
              <p><strong>TS path:</strong> <a href={data.TS_PATH} className='text-blue-500'>{data.TS_PATH}</a></p>
              {/* <p><strong>Webservice URLS:</strong> {data["Webservice URLS"]}</p> */}
              {/* <p><strong>S3 details:</strong> {data["S3 details"]}</p> */}
              {/* <p><strong>File transfer jobs:</strong> {data["File transfer jobs"]}</p> */}
              {/* Add more details here */}
            </div>
        </div>):<h1 className='justify-center flex inline-block mt-5 p-5'>Please enter the {searchBy}</h1>}
      </div>
    );
  };
  
  export default SearchCard;