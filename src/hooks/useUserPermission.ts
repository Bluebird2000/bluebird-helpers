import { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, Permission } from "react-native";

/**
 * Custom hook to request user permissions.
 * @param {string} permission - The permission you want to request.
 * @returns {boolean} - Whether the permission is granted.
 */
export default function useUserPermission(permission: Permission) {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      if (Platform.OS === "android") {
        const result = await PermissionsAndroid.request(permission);
        setGranted(result === PermissionsAndroid.RESULTS.GRANTED);
      } else {
        setGranted(true);
      }
    };

    requestPermission();
  }, [permission]);

  return granted;
}
