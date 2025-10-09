export function calculateExperience() {
  const currentDate = new Date();
  let totalMonths = 0;

  // Freelance: jun 2024 - dic 2024 (7 meses)
  totalMonths += 7;

  // Banco de la República: ene 2025 - jun 2025 (6 meses)
  totalMonths += 6;

  // Upwork: ago 2025 - actualidad
  const upworkStartDate = new Date(2025, 7, 1); // agosto 2025 (mes 7 porque enero es 0)
  const upworkMonths = (currentDate.getFullYear() - upworkStartDate.getFullYear()) * 12 + 
                      (currentDate.getMonth() - upworkStartDate.getMonth()) + 1;
  
  totalMonths += Math.max(0, upworkMonths); // Asegurar que no sea negativo

  // Convertir a años con un decimal
  return Math.round((totalMonths / 12) * 10) / 10;
}