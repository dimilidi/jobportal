import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

type User = {
  name: string;
  email: string;
};

const Context = createContext({
  data: null,
});
