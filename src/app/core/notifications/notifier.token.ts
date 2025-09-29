import {  InjectionToken } from "@angular/core";
import { Notifier } from "../../domain/models/notifier.interface";

export const NOTIFIER_TOKEN = new InjectionToken<Notifier>('Notifier');