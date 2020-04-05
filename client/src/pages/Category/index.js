import React, { Component } from "react";
import SkeletonCategories from "./SkeletonCategories";

export class Category extends Component {
  render() {
    return (
      <div>
        <SkeletonCategories />
      </div>
    );
  }
}
