// main.js - Portfolio completo y corregido

// ========== SERVICIOS ==========
const services = [
    {
        icon: "fa-solid fa-code",
        title: "Desarrollo Web",
        description: "Creación de aplicaciones web modernas con React, Next.js, Node.js y buenas prácticas. Interfaces responsivas y optimizadas."
    },
    {
        icon: "fa-solid fa-database",
        title: "Backend & APIs",
        description: "Diseño de APIs REST, integración con bases de datos SQL/NoSQL (MySQL, MongoDB, Cassandra) y arquitectura MVC."
    },
    {
        icon: "fa-solid fa-lock",
        title: "Ciberseguridad Básica",
        description: "Conocimientos en hacking ético, ciberdefensa y buenas prácticas de seguridad en aplicaciones web."
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Análisis de Datos",
        description: "Limpieza, visualización y análisis de información con Power BI, Excel y SQL para toma de decisiones."
    }
];

const servicesContainer = document.getElementById("services-container");
if (servicesContainer) {
    services.forEach(service => {
        servicesContainer.innerHTML += `
            <article class="services__card">
                <i class="${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </article>
        `;
    });
}

// ========== PROYECTOS ==========
const projects = [
    {
        title: "CyberArena",
        description: "Sistema de inscripción con API REST para gestión de usuarios, validación de datos y carga de archivos en la nube. Desarrollado con TypeScript, React, Node.js y MongoDB.",
        tech: "TypeScript • React • Node.js • Express • MongoDB",
        link: "https://cyber-arena-vlgt.vercel.app"
    }
];

const projectsContainer = document.getElementById("projects-container");
if (projectsContainer) {
    projects.forEach(project => {
        projectsContainer.innerHTML += `
            <article class="projects__card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="projects__tech">⚡ ${project.tech}</span>
                <a href="${project.link}" target="_blank" class="projects__link">
                    Ver proyecto → 
                </a>
            </article>
        `;
    });
}

// ========== SKILLS ==========
const skills = [
    {
        category: "Frontend",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
        category: "Backend & DB",
        items: ["Java", "C#", "ASP.NET", "Python", "Node.js", "APIs REST", "SQL", "MySQL", "MongoDB", "Cassandra"]
    },
    {
        category: "Herramientas & Cloud",
        items: ["Git/GitHub", "Power BI", "Excel Avanzado", "Linux", "Unity", "AWS Cloud (básico)"]
    },
    {
        category: "Ciberseguridad",
        items: ["Hacking Ético (básico)", "Ciberdefensa", "Seguridad Web", "Linux"]
    }
];

const skillsContainer = document.getElementById("skills-container");
if (skillsContainer) {
    skills.forEach(skill => {
        let skillsHTML = "";
        skill.items.forEach(item => {
            skillsHTML += `<li class="skills__item">${item}</li>`;
        });
        skillsContainer.innerHTML += `
            <article class="skills__card">
                <h3>${skill.category}</h3>
                <ul class="skills__list">${skillsHTML}</ul>
            </article>
        `;
    });
}

// ========== EXPERIENCIA ==========
const experiences = [
    {
        title: "Líder Web - OpenHub Club ESPE",
        date: "2025 - Actualidad",
        description: "Responsable del desarrollo y apoyo en iniciativas web dentro del club. Participación en proyectos tecnológicos y desarrollo de la plataforma Cyber Arena."
    },
    {
        title: "Competencia IEEE Xtreme",
        date: "2024 - 2025",
        description: "Resolución de ejercicios de estructuras de datos y algoritmos en equipo. Competencia internacional de programación."
    },
    {
        title: "Hackathon Interact2Hack",
        date: "2026",
        description: "Participación en hackathon enfocada en análisis e interpretación de datos utilizando herramientas tecnológicas."
    },
    {
        title: "Voluntario - DiversoJob",
        date: "2025",
        description: "Participación en iniciativas tecnológicas orientadas a inclusión laboral e impacto social, colaborando en actividades relacionadas con tecnología y desarrollo."
    }
];

const experienceContainer = document.getElementById("experience-container");
if (experienceContainer) {
    experiences.forEach(exp => {
        experienceContainer.innerHTML += `
            <article class="experience__card">
                <h3>${exp.title}</h3>
                <span class="date">📅 ${exp.date}</span>
                <p>${exp.description}</p>
            </article>
        `;
    });
}

// ========== EDUCACIÓN + CERTIFICACIONES ==========
const educationData = {
    university: {
        title: "Ingeniería de Software",
        institution: "Universidad de las Fuerzas Armadas ESPE",
        period: "6to semestre - Actualidad",
        description: "Formación en desarrollo de software, bases de datos, arquitectura y metodologías ágiles."
    },
    certifications: [
        "AWS Cloud Practitioner Complete Course — Udemy",
        "Frontend Development — Fundación Carlos Slim",
        "Programa de especialización en Python (básico - avanzado)",
        "Hacking Ético — Nivel Básico",
        "Iniciando en el Mundo de la Ciberseguridad",
        "Auxiliar técnico en diseño y gestión web"
    ]
};

const educationContainer = document.getElementById("education-container");
if (educationContainer) {
    educationContainer.innerHTML = `
        <div class="education__card">
            <h3><i class="fa-solid fa-graduation-cap"></i> ${educationData.university.title}</h3>
            <p><strong>${educationData.university.institution}</strong></p>
            <p>${educationData.university.period}</p>
            <p>${educationData.university.description}</p>
            <p style="margin-top: 10px;">Inglés: Nivel B1 (Intermedio)</p>
        </div>
        <div class="education__card">
            <h3><i class="fa-solid fa-certificate"></i> Certificaciones</h3>
            <ul class="cert-list">
                ${educationData.certifications.map(cert => `<li>✓ ${cert}</li>`).join('')}
            </ul>
        </div>
    `;
}

// ========== FUNCIÓN PARA ENVIAR CORREO CON EMAILJS ==========
// NOTA: EmailJS ya está inicializado en el HTML, NO inicializar aquí

async function enviarConEmailJS(nombre, email, mensaje) {
    const formFeedback = document.getElementById("formFeedback");
    const contactForm = document.getElementById("contactForm");
    const boton = document.querySelector('.contact__button');
    const textoOriginal = boton.innerHTML;
    
    try {
        boton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        boton.disabled = true;
        
        const templateParams = {
            from_name: nombre,
            from_email: email,
            message: mensaje,
            reply_to: email,
            to_email: "obanderick@gmail.com"
        };
        
        const response = await emailjs.send(
            'service_yqid575',
            'template_jrply8l',
            templateParams
        );
        
        if (response.status === 200) {
            formFeedback.textContent = "✅ ¡Mensaje enviado exitosamente! Te responderé pronto.";
            formFeedback.style.color = "#4caf50";
            contactForm.reset();
        } else {
            throw new Error("Error en el envío");
        }
        
    } catch (error) {
        console.error("Error EmailJS:", error);
        formFeedback.textContent = "❌ Error al enviar. Escríbeme directamente a: obanderick@gmail.com";
        formFeedback.style.color = "#ff5722";
    } finally {
        boton.innerHTML = textoOriginal;
        boton.disabled = false;
        formFeedback.style.opacity = "1";
        setTimeout(() => {
            formFeedback.style.opacity = "0";
        }, 5000);
    }
}

// ========== EVENTO DEL FORMULARIO (UNO SOLO) ==========
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById("contactName")?.value.trim();
        const email = document.getElementById("contactEmail")?.value.trim();
        const mensaje = document.getElementById("contactMessage")?.value.trim();
        
        if (!nombre || !email || !mensaje) {
            formFeedback.textContent = "⚠️ Por favor, completa todos los campos.";
            formFeedback.style.color = "#ff5722";
            formFeedback.style.opacity = "1";
            setTimeout(() => {
                formFeedback.style.opacity = "0";
            }, 3000);
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formFeedback.textContent = "⚠️ Por favor, ingresa un correo electrónico válido.";
            formFeedback.style.color = "#ff5722";
            formFeedback.style.opacity = "1";
            setTimeout(() => {
                formFeedback.style.opacity = "0";
            }, 3000);
            return;
        }
        
        enviarConEmailJS(nombre, email, mensaje);
    });
}

// ========== ANIMACIONES SMOOTH ==========
document.querySelectorAll('.header__link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

console.log("✅ Portfolio cargado correctamente");