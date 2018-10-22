import { NavItemModel } from './navItemModel';

export const DEFAULT_ITEMS: NavItemModel[] = [
  { name: 'Dashboard', icon: 'dashboard', route: '/'}
];

export const ADMIN_ITEMS: NavItemModel[] = [
  { name: 'Proyectos', icon: 'work', route: '/proyect'},
  { name: 'Archivos', icon: 'folder', route: '/user'},
  { name: 'Contactos', icon: 'contacts', route: '/user'},
  { name: 'Grupos', icon: 'group', route: '/user'},
  { name: 'Usuarios', icon: 'person', route: '/user'},
  { name: 'Reportes', icon: 'insert_drive_file', route: '/user'}
];

export const POINTOFSALE_ITEMS: NavItemModel[] = [
  { name: 'Dashboard', icon: 'dashboard', route: '/dashboard'}
];
