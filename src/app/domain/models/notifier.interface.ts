// generic interface for different notifier implementations
export interface Notifier {
notify(message: string): void;
}