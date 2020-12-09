import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IB, B } from 'app/shared/model/b.model';
import { BService } from './b.service';

@Component({
  selector: 'jhi-b-update',
  templateUrl: './b-update.component.html',
})
export class BUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
  });

  constructor(protected bService: BService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ b }) => {
      this.updateForm(b);
    });
  }

  updateForm(b: IB): void {
    this.editForm.patchValue({
      id: b.id,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const b = this.createFromForm();
    if (b.id !== undefined) {
      this.subscribeToSaveResponse(this.bService.update(b));
    } else {
      this.subscribeToSaveResponse(this.bService.create(b));
    }
  }

  private createFromForm(): IB {
    return {
      ...new B(),
      id: this.editForm.get(['id'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IB>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }
}
