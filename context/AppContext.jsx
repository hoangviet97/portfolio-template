import React from "react";
import { theme, logo, aboutImage, services, projects, highlightStatistics, contactImage, skills, languages, resume, clients, project_categories } from "../data/data";

export const AppContext = React.createContext({ theme, logo, aboutImage, services, projects, highlightStatistics, contactImage, skills, languages, resume, clients, project_categories });

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={{ theme: theme, logo: logo, aboutImage: aboutImage, services: services, projects: projects, highlightStatistics: highlightStatistics, contactImage: contactImage, skills: skills, languages: languages, resume: resume, clients: clients, project_categories: project_categories }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
