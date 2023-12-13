import React from "react";
import { NavLink } from "react-router-dom";
import { TiDocumentAdd } from "react-icons/ti";

function TableHead() {
    return (
        <thead>
            <tr>
                <th>Brand</th>
                <th>Color</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Date Purchased</th>
                <th><NavLink to="../create"><i><TiDocumentAdd title="Add a piece to your closet"></TiDocumentAdd></i></NavLink> </th>
                <th>Delete</th>
            </tr>
        </thead>
    )
}

export default TableHead;