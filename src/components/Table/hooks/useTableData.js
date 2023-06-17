import axios from "axios";
import { useEffect, useState } from "react";

export const useTableData = () => {
  // URL
  const ALL_CHARACTER_LIST = "https://the-one-api.dev/v2/character";
  const CHARACTER_DETAILS_BY_ID = "https://the-one-api.dev/v2/character/";
  const CHARACTERS_BY_NAME = "https://the-one-api.dev/v2/character?name=";
  const SORT_BY_RACE = "https://the-one-api.dev/v2/character?race=";
  const SORT_NAME_BY_ASC_DESC =
    "https://the-one-api.dev/v2/character?sort=name:";

  const token = "TCe6-BDCh_MHO2IDEkPd";

  const [allCharacterData, setAllCharacterData] = useState([]);

  const [characterDetails, setCharacterDetails] = useState([]);

  const [multipleRace, setMultipleRace] = useState([]);

  const [characterPopUp, setCharacterPopUp] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isDataLoading, setIsDataLoading] = useState(false);

  const [isIdDataLoading, setIsIdDataLoading] = useState(false);

  const [idData, setIdData] = useState("");

  const [formValues, setFormValues] = useState({
    search: "",
    sort: "",
    gender: "",
  });

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const [datasPerPage, setDatasPerPage] = useState(10);

  const indexOfLastRecord = currentPage * datasPerPage;

  const indexOfFirstRecord = indexOfLastRecord - datasPerPage;

  const currentRecords = allCharacterData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  // POPUP HANCLE CLOSE
  const characterPopUpHandleClose = () => {
    setCharacterPopUp(!characterPopUp);
  };

  // GET ALL BOOK LIST
  const getAllCharacterList = async () => {
    setIsDataLoading(true);
    try {
      const resp = await axios
        .get(`${ALL_CHARACTER_LIST}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsDataLoading(false);
          setAllCharacterData(res.data.docs);
          return res;
        });
      return resp;
    } catch (err) {
      return err;
    }
  };

  // GET CHARACTERS BY NAME
  const getCharactersByName = async () => {
    setIsLoading(true);
    try {
      const resp = await axios
        .get(`${CHARACTERS_BY_NAME}${formValues.search}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsLoading(false);
          setAllCharacterData(res.data.docs);
          return res;
        });
      return resp;
    } catch (err) {
      setIsLoading(false);
      return err;
    }
  };

  // SORT BY RACE
  const sortByRace = async () => {
    setIsLoading(true);
    try {
      const resp = await axios
        .get(`${SORT_BY_RACE}${multipleRace}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsLoading(false);
          setAllCharacterData(res.data.docs);
          return res;
        });
      return resp;
    } catch (err) {
      setIsLoading(false);
      return err;
    }
  };

  // SORT BY GENDER
  const sortByGender = () => {
    if (formValues.gender === "Any") {
      getAllCharacterList();
    } else {
      setAllCharacterData(
        allCharacterData?.filter((value) =>
          value.gender?.includes(formValues.gender)
        )
      );
    }
  };

  // SORT NAME BY ASCE AND DESC
  const sortNameByAscDesc = async () => {
    setIsLoading(true);
    try {
      const resp = await axios
        .get(`${SORT_NAME_BY_ASC_DESC}${formValues.sort}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsLoading(false);
          setAllCharacterData(res.data.docs);
          return res;
        });
      return resp;
    } catch (err) {
      setIsLoading(false);
      return err;
    }
  };

  // GET CHARACTER DETAILS BY ID
  const getCharacterDetailsById = async (id) => {
    setIsIdDataLoading(true);
    try {
      const resp = await axios
        .get(`${CHARACTER_DETAILS_BY_ID}${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsIdDataLoading(false);
          setCharacterPopUp(true);
          setCharacterDetails(res.data.docs);
          return res;
        });
      return resp;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getAllCharacterList();
  }, []);

  useEffect(() => {
    if (multipleRace.length === 0) {
      getAllCharacterList();
    }
  }, [multipleRace]);

  // CHARACTERS HANDLE CHANGE
  const charactersHandleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = () => {
    if (multipleRace?.length !== 0) {
      sortByRace();
    }
    if (formValues.search.length !== 0) {
      getCharactersByName();
    }
    if (formValues.sort) {
      sortNameByAscDesc();
    }
    if (formValues.gender) {
      sortByGender();
    }
  };

  return {
    allCharacterData,
    charactersHandleChange,
    formValues,
    multipleRace,
    setMultipleRace,
    handleSubmit,
    currentRecords,
    setCurrentPage,
    setDatasPerPage,
    getCharacterDetailsById,
    characterDetails,
    characterPopUp,
    characterPopUpHandleClose,
    isLoading,
    isDataLoading,
    idData,
    setIdData,
    isIdDataLoading,
    getAllCharacterList,
  };
};
