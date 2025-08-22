export interface NavigationItem {
  href: string;
  label: string;
}

export interface DropdownMenuProps {
  trigger: string;
  items: NavigationItem[];
}

export interface NavigationState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}

export interface NavLinkProps {
  href: string;
  children: string;
  className?: string;
  isActive?: boolean;
}
