import Dashboard from "./pages/Dashboard";

import NotFound from "./pages/NotFound";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import {
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Home as HomeIcon
} from '@material-ui/icons';



interface DrawerItem {
  title: string,
  icon?: any
}


export enum RouteId {
  Index,
  About,
  Dashboard,
  Contact,
  Home,
  Projects
}

export interface RoutedComponentProps {
  routeDetail: RouteDetail
}

interface RouteDetail {
  id: RouteId,
  path: string,
  redirectTo?: string,
  title?: string,
  component: React.FC<RoutedComponentProps>,
  exact?: boolean,    // Default: false
  drawerItem?: DrawerItem
}


export function findRouteDetailById(id: RouteId) {

}

const routes: RouteDetail[] = [

  // Index 
  {
    id: RouteId.Index,
    path: "/",
    redirectTo: "/home",
    component: Home 
  },
  //home
{
  id: RouteId.Home,
  path: "/home", 
  title: "Home",
  component: Home,
  drawerItem: {
    title: "Home",
    icon: HomeIcon
  }
},
//About
  
{
  id: RouteId.About,
  path: "/about", 
  title: "About",
  component: About,
  drawerItem: {
    title: "About",
    icon: PersonIcon
  }
},
  // Dashboard
  {
    id: RouteId.Projects,
    path: "/project", 
    title: "Projects",
    component: Dashboard,
    drawerItem: {
      title: "Projects",
      icon: DashboardIcon
    }
  },
  // {
  //   id: RouteId.Test,
  //   path: "/test", 
  //   title: "test",
  //   component: Dashboard,
  //   drawerItem: {
  //     title: "test",
  //     icon: TimelineIcon
  //   }
  // },

  // {
  //   id: RouteId.NotFound,
  //   path: "/404", 
  //   title: "404 not found",
  //   component: NotFound,
  //   drawerItem: {
  //     title: "Not found",
  //     icon: AssessmentIcon
  //   }
  // }
  // ,
  {
    id: RouteId.Contact,
    path: "/contact", 
    title: "Contact",
    component: Contact,
    drawerItem: {
      title: "Contact",
      icon: EmailIcon
    }
  }
  
]

export default routes;
