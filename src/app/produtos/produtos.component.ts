import { Component, ChangeDetectorRef } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  listaProdutos: any[] = [];

  constructor(
    private produtosService: ProdutosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.produtosService.pegarProdutos().subscribe((produtos) => {
      this.listaProdutos = produtos;
      this.cdr.detectChanges();  // Força a detecção de mudanças
    });
  }
}
