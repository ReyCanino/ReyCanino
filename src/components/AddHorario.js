import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import HorarioForm from "./HorarioForm";

export default function AddHorario(props) {
    return (
        <div >
            <GridListTile >
                <br />
                <br />
                <br/>
                <GridListTileBar

                    actionIcon={
                        <HorarioForm history={props.history} />
                    }
                />
                </GridListTile>
        </div>
    );
}