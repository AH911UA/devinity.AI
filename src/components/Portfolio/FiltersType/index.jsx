import FiltersContainer from "./FiltersContainer";
import Button from "../../UI/Button";
import React from "react";
import colors from "../../colors";

const types = [
  {
    id: "all",
    name: "All projects",
    filter: null,
  },
  {
    id: "web",
    name: "Web",
    filter: "web",
  },
  {
    id: "mobile",
    name: "Mobile",
    filter: "mobile",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    filter: "blockchain",
  },
];

const FiltersType = ({ filter, setFilter }) => {
  return (
    <FiltersContainer>
      {types?.map((type) => (
        <div key={type?.id} onClick={() => setFilter(type?.filter)}>
          <Button
            color={filter === type?.filter ? colors.purple : colors.purple }
            background={filter === type?.filter ? colors.purple700 : "rgba(0,0,0,0)"}
            $borderColor={filter === type?.filter ? colors.purple600 : "#331345"}
            style={{
              cursor: "pointer",
            }}
            whitespace={"nowrap"}
          >
            {type?.name}
          </Button>
        </div>
      ))}
    </FiltersContainer>
  );
};

export default FiltersType;
