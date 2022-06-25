import { defineStore } from "pinia";
import axios from "axios";

export const useAuth = defineStore("auth-store", {
    state: () => {
        return {
            user: null,
            authenticated: false,
        };
    },
    actions: {
        async register(credentials) {
            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/register", credentials);
                this.getUser();
            } catch (error) {
                this.authenticated = false;
                this.user = null;
                console.error("Error loading new arrivals:", error);
                return error;
            }
        },

        async login(credentials) {
            try {
                await axios.get("/sanctum/csrf-cookie");
                await axios.post("/login", credentials);
                this.getUser();
            } catch (error) {
                this.authenticated = false;
                this.user = null;
                console.error("Error loading new arrivals:", error);
                return error;
            }
        },

        async logout() {
            try {
                await axios.post("/logout");
                this.authenticated = false;
                this.user = null;
            } catch (error) {
                console.error("Error loading new arrivals:", error);
                return error;
            }
        },

        async getUser() {
            try {
                const response = await axios.get("/api/user");
                this.user = response.data;
                this.authenticated = true;
            } catch (error) {
                this.user = null;
                this.authenticated = false;
                console.error("Error loading new arrivals:", error);
                return error;
            }
        },
    },
});
