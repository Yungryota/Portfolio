document.addEventListener('DOMContentLoaded', function() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    //Called on html ;)
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    // Objeto que contiene los datos y las traducciones
    const data = {
        "english": {
            "carrer": "IT Ingeneering",
            "description": "I am a Third year student of IT Engineering from Santiago, Chile. Soon I will going to be graduate. I am part of the Centro de Innovación y Transferencia Tecnológica (CITT) in Duoc UC.",
            "t1": "Development platform",
            "t2": "Programming Languages",
            "t3": "General Skills",
            "c": "Contact",
            "s": "Skills",
            "e": "Education",
            "duocA": "DuocUC is a Profesional Institute with many courses.",
            "duocL": "Visit Duoc UC page here",
            "age": "IT Ingeneering (3rd year)",
            "made":"Made with jQuery and Bootstrap.",
        },
        "spanish": {
            "carrer": "Ing. en Informática",
            "description": "Soy estudiante de tercer año en Ingeniería en Informática, vivo en Santiago, Chile. Me queda solo un año para graduarme. Soy parte del CITT en Duoc UC.",
            "t1": "Plataformas de desarrollo",
            "t2": "Lenguajes de programación",
            "t3": "Habilidades generales",
            "c": "Contacto",
            "s": "Habilidades",
            "e": "Educación",
            "duocA": "DuocUC es un instituto profesional con muchas carreras.",
            "duocL": "Visita su página aquí",
            "age": "Ing. en Informática (3er año)",
            "made":"Hecho con jQuery y Bootstrap.",
        }
    };

    // Función para actualizar el contenido según el idioma seleccionado
    function updateContent(language) {
        const elementsToUpdate = {
            '.carrer': 'carrer',
            '.description': 'description',
            '.t1': 't1',
            '.t2': 't2',
            '.t3': 't3',
            '.c': 'c',
            '.s': 's',
            '.e': 'e',
            '.duocA': 'duocA',
            '.duocL': 'duocL',
            '.age': 'age',
            '.made':'made',
        };

        Object.entries(elementsToUpdate).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = data[language][key];
            }
        });
    }

    // Event listener para el cambio de idioma
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        updateContent(selectedLanguage);
    });

    // Actualiza el contenido al cargar la página con el idioma inicial
    document.addEventListener('DOMContentLoaded', function() {
        const initialLanguage = languageSelect.value; // Obtiene el idioma inicial del select
        updateContent(initialLanguage); // Actualiza el contenido con el idioma inicial
    });

    $('#languageSelect').on('change', function () {
        const selectedLanguage = $(this).val();
        if (selectedLanguage === 'spanish') {
            $('#translationIncompleteToast').toast('show');
        } else {
            $('#translationIncompleteToast').toast('hide');
        }
    });
});
