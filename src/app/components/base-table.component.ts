import { Observable } from "rxjs";
import { AbsBaseComponent } from "./abs-base.component";
import { Injector } from "@angular/core";
import { BaseTableService } from "../services/base-table-service.service";
export class BaseTableComponent extends AbsBaseComponent {

    constructor(
        injector: Injector,
    ) {
        super();

    }
}