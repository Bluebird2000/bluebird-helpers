var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
/**
 * Custom hook to request user permissions.
 * @param {string} permission - The permission you want to request.
 * @returns {boolean} - Whether the permission is granted.
 */
export default function useUserPermission(permission) {
    const [granted, setGranted] = useState(false);
    useEffect(() => {
        const requestPermission = () => __awaiter(this, void 0, void 0, function* () {
            if (Platform.OS === "android") {
                const result = yield PermissionsAndroid.request(permission);
                setGranted(result === PermissionsAndroid.RESULTS.GRANTED);
            }
            else {
                setGranted(true);
            }
        });
        requestPermission();
    }, [permission]);
    return granted;
}
