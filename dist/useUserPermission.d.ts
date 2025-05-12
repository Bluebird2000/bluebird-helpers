import { Permission } from "react-native";
/**
 * Custom hook to request user permissions.
 * @param {string} permission - The permission you want to request.
 * @returns {boolean} - Whether the permission is granted.
 */
export default function useUserPermission(permission: Permission): boolean;
