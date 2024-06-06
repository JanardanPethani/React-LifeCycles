import { createRoot } from "react-dom/client";

import "./styles.css";
import { Footer } from "./Footer";

// Mount
import GetDerivedStateFromProps from "./mount/GetDerivedStateFromProps";
import ComponentDidMount from "./mount/ComponentDidMount";

// Update
import ShouldComponentUpdate from "./update/ShouldComponentUpdate";
import GetSnapshotBeforeUpdate from "./update/GetSnapshotBeforeUpdate";
import ComponentDidUpdate from "./update/ComponentDidUpdate";

// Unmount
import ComponentWillUnmount from "./unmount/ComponentWillUnmount";

// All methods in one
import AllInOne from "./AllInOne";

// For ErrorBoundry
import ErrorBoundry from "./error/ErrorBoundry";
import Wasted from "./error/Error";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="parent">
    <div className="main">
      {/* <GetDerivedStateFromProps /> */}
      {/* <ComponentDidMount /> */}

      {/* <ShouldComponentUpdate /> */}
      {/* <GetSnapshotBeforeUpdate /> */}
      {/* <ComponentDidUpdate /> */}

      {/* <ComponentWillUnmount /> */}
      {/* 
      <ErrorBoundry>
        <Wasted />
      </ErrorBoundry> */}

      {/* -------------- */}
      {/* <AllInOne /> */}
    </div>
    <Footer />
  </div>
);
