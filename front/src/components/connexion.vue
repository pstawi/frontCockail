<template>
    <div>
      <!-- Formulaire de connexion -->
      <form @submit.prevent="loginUser"> 
        <!-- Empêche le rechargement de la page lors de la soumission -->
  
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required> 
        <!-- Liaison bidirectionnelle entre l'input et la donnée "email" -->
  
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required> 
        <!-- Liaison bidirectionnelle entre l'input et la donnée "password" -->
  
        <button type="submit">Submit</button> 
        <!-- Bouton permettant de soumettre le formulaire -->
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Importation de la bibliothèque Axios pour faire des requêtes HTTP
  
  export default {
    data() {
      return {
        email: '',    // Stocke l'email saisi par l'utilisateur
        password: ''  // Stocke le mot de passe saisi par l'utilisateur
      };
    },
    methods: {
      /**
       * Fonction pour gérer la connexion de l'utilisateur
       */
      async loginUser() {
        try {
          // Envoi d'une requête POST à l'API avec les informations de connexion
          const response = await axios.post('http://localhost:3000/user/login', {
            email: this.email,         // Envoie l'email de l'utilisateur
            mot_de_passe: this.password // Envoie le mot de passe
          });
  
          // Stocke le token JWT dans le localStorage pour une utilisation ultérieure
          localStorage.setItem("Authorization", response.data.token);
  
          // Affichage du token dans la console (utile pour le debug)
          console.log(response.data.token);
  
          // Ajout d'un intercepteur pour inclure le token dans chaque requête
          this.intercepteurToken();
        } catch (error) {
          console.error("Erreur lors de la connexion :", error);
        }
      },
  
      /**
       * Fonction pour configurer un intercepteur Axios
       * permettant d'ajouter automatiquement le token dans les requêtes HTTP
       */
      intercepteurToken() {
        axios.interceptors.request.use(
          config => {
            // Récupère le token depuis le localStorage et l'ajoute dans les headers des requêtes
            config.headers.Authorization = localStorage.getItem("Authorization");
            return config;
          }
        );
      }
    }
  }
  </script>
  
  <style>
  /* Ajoute ici ton CSS si nécessaire */
  </style>
  