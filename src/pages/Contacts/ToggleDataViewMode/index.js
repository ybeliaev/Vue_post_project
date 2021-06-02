import { useCallback, memo } from "react";
import PropTypes from "prop-types";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
// import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import { DATA_VIEW_MODE } from "../../../constants/constants";

export const ToggleDataViewMode = memo(({ dataViewMode, setDataViewMode }) => {
  const handleChangeViewMode = useCallback(
    (_, nextView) => {
      setDataViewMode(nextView);
      localStorage.setItem("dataViewMode", dataViewMode);
    },
    [dataViewMode, setDataViewMode]
  );

  return (
    <ToggleButtonGroup
      value={dataViewMode}
      exclusive
      onChange={handleChangeViewMode}
    >
      <ToggleButton
        value={DATA_VIEW_MODE.GRID}
        aria-label={DATA_VIEW_MODE.GRID}
        data-testid="toggle-data-viewmode-grid"
      >
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton
        value={DATA_VIEW_MODE.TABLE}
        aria-label={DATA_VIEW_MODE.TABLE}
        data-testid="toggle-data-viewmode-table"
      >
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
});

ToggleDataViewMode.propTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VIEW_MODE.TABLE, DATA_VIEW_MODE.GRID])
    .isRequired,
  setDataViewMode: PropTypes.func.isRequired,
};
