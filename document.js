document.addEventListener('DOMContentLoaded', function () {
    const experienceData = [
        {
            role: 'Software and Interface Tool Developer Intern',
            company: 'SmartCube, Luxembourg',
            date: 'May 2025 – Aug 2025',
            icon: 'code',
            details: [
                'Designed a web tool using HTML/CSS/JS and Python to display consumption data from sensors for energy monitoring of connected buildings.',
                'Developed Python and VBA scripts for data retrieval and automated report generation.'
            ]
        },
        {
            role: 'Logistics Coordinator',
            company: 'PRIMAVERA, Luxembourg',
            date: 'Jul 2024 – Aug 2024',
            icon: 'box',
            details: [
                'Supervised the reception and verification of goods to ensure quality and compliance.',
                'Managed inventory meticulously and conducted stocktaking.',
                'Optimised shelf arrangement to improve accessibility and product presentation.'
            ]
        },
        {
            role: 'Vice President – Naeptune Student Union (BDE)',
            company: 'JUNIA, Bordeaux',
            date: 'Sep 2023 – Jul 2024',
            icon: 'users',
            details: [
                'Structured and managed a 50-member student association, including integration and role transition.',
                'Administered an annual budget of €4,900, focusing on resource optimisation for high-impact activities.'
            ]
        },
        {
            role: 'Industrial Maintenance Technician',
            company: 'SANOFI, Val-de-Reuil',
            date: 'Jul 2023 – Aug 2023',
            icon: 'wrench',
            details: [
                'Executed interventions on production lines during the annual shutdown.',
                'Carried out cleaning and maintenance procedures on autoclaves, tanks, and valves.',
                'Collaborated with the design office to secure HSE access hatches for mapping.'
            ]
        }
    ];

    const timelineContainer = document.getElementById('experience-timeline');
    const icons = {
        code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg>`,
        box: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16"><path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/></svg>`,
        users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.22-2.803.629-.536 1.27-1.006 1.687-1.332zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg>`,
        wrench: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16"><path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.342a3 3 0 1 0-1.414 1.414l-6.34-6.342A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/></svg>`
    };

    experienceData.forEach(item => {
        const detailsHtml = item.details.map(detail => `<li>${detail}</li>`).join('');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="absolute w-8 h-8 bg-white rounded-full -left-12 border-4 border-slate-200 flex items-center justify-center text-teal-500">
                ${icons[item.icon]}
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 cursor-pointer experience-item">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="text-lg font-bold text-slate-900">${item.role}</h3>
                        <p class="text-teal-600 font-medium">${item.company}</p>
                    </div>
                    <p class="text-sm text-slate-500 font-medium whitespace-nowrap">${item.date}</p>
                </div>
                <div class="experience-details hidden mt-4 pl-2 border-l-2 border-slate-100">
                    <ul class="list-disc list-inside text-slate-600 space-y-1 text-sm">${detailsHtml}</ul>
                </div>
            </div>`;
        timelineContainer.appendChild(element);
    });
    
    document.querySelectorAll('.experience-item').forEach(item => {
        item.addEventListener('click', () => {
            const details = item.querySelector('.experience-details');
            details.classList.toggle('hidden');
        });
    });

    const skillsData = {
        programming: {
            labels: ['Python', 'JavaScript', 'HTML/CSS', 'C/C++', 'Java', 'VBA'],
            data: [90, 80, 85, 70, 65, 75]
        },
        data: {
            labels: ['SQL', 'Power BI', 'Matplotlib', 'Plotly', 'Data Analysis'],
            data: [85, 80, 75, 70, 85]
        },
        tools: {
            labels: ['Git/GitHub', 'Agile/Scrum', 'Software Design', 'OOP', 'Full-Stack Dev'],
            data: [90, 80, 85, 80, 75]
        }
    };
    
    const ctx = document.getElementById('skillsChart').getContext('2d');
    let skillsChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: skillsData.programming.labels,
            datasets: [{
                label: 'Proficiency',
                data: skillsData.programming.data,
                backgroundColor: 'rgba(20, 184, 166, 0.2)',
                borderColor: 'rgba(15, 118, 110, 1)',
                pointBackgroundColor: 'rgba(15, 118, 110, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(15, 118, 110, 1)'
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                    grid: { color: 'rgba(0, 0, 0, 0.1)' },
                    pointLabels: {
                        font: { size: 12 },
                        color: '#475569'
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#64748b',
                        stepSize: 20,
                        beginAtZero: true,
                        max: 100
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    window.updateChart = function(category) {
        skillsChart.data.labels = skillsData[category].labels;
        skillsChart.data.datasets[0].data = skillsData[category].data;
        skillsChart.update();
        
        document.querySelectorAll('.skill-btn').forEach(btn => {
            btn.classList.remove('bg-teal-500', 'text-white');
            btn.classList.add('bg-slate-200', 'text-slate-700');
        });
        
        event.target.classList.add('bg-teal-500', 'text-white');
        event.target.classList.remove('bg-slate-200', 'text-slate-700');
    };
});
