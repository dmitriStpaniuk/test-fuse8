export const truncateString = (str: string, maxLength: number) => {
    if (str.length <= maxLength) return str;
    
    // Обрезаем по словам
    const truncated = str.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    
    if (lastSpace === -1) {
      return truncated + '...';
    }
    
    return truncated.substring(0, lastSpace) + '...';
  };