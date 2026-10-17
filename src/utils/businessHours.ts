export interface StoreStatus {
  isOpen: boolean;
  message: string;
  nextChangeText: string;
}

export function getStoreStatus(): StoreStatus {
  // Cuiabá is UTC-4 (GMT-4)
  const now = new Date();
  
  // Calculate UTC time in milliseconds, then apply Cuiabá offset (-4 hours = -240 minutes)
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const cuiabaTime = new Date(utc - (3600000 * 4));

  const dayOfWeek = cuiabaTime.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const currentHour = cuiabaTime.getHours();
  const currentMinute = cuiabaTime.getMinutes();
  const currentTotalMinutes = currentHour * 60 + currentMinute;

  const openMinutes = 9 * 60; // 09:00
  const closeMinutes = 18 * 60; // 18:00

  // Monday to Saturday: 09:00 to 18:00
  const isWorkDay = dayOfWeek >= 1 && dayOfWeek <= 6;
  const isWithinHours = currentTotalMinutes >= openMinutes && currentTotalMinutes < closeMinutes;

  if (isWorkDay && isWithinHours) {
    const remainingMinutes = closeMinutes - currentTotalMinutes;
    const remainingHours = Math.floor(remainingMinutes / 60);
    const mins = remainingMinutes % 60;
    const timeRemainingStr = remainingHours > 0 ? `${remainingHours}h ${mins}min` : `${mins}min`;

    return {
      isOpen: true,
      message: "Loja aberta agora",
      nextChangeText: `Fecha às 18:00 (restam ${timeRemainingStr})`,
    };
  }

  // If closed
  let reopenText = "Abre amanhã às 09:00";
  if (dayOfWeek === 6 && currentTotalMinutes >= closeMinutes) {
    reopenText = "Abre segunda-feira às 09:00";
  } else if (dayOfWeek === 0) {
    reopenText = "Abre segunda-feira às 09:00";
  } else if (currentTotalMinutes < openMinutes) {
    reopenText = "Abre hoje às 09:00";
  }

  return {
    isOpen: false,
    message: "Loja fechada no momento",
    nextChangeText: `${reopenText} · Atendimento WhatsApp 24h`,
  };
}
