export interface WeatherType {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        // Другие поля, которые можно использовать
    };
    // Другие поля, которые можно использовать
}