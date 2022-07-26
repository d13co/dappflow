import {Link} from "@mui/material";
import React from "react";

function LinkToGroup({id, blockId}): JSX.Element {
    return <Link href={"/explorer/group/" + encodeURIComponent(id) + '/' + blockId}>{id}</Link>;
}

export default LinkToGroup;