import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransactionsComponent } from './components/create-transaction/create-transaction.component';
import { ErrorPageComponent } from './components/error-page/error.component';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

export const paths = {
    home: '',
    createTransaction: 'create-transaction',
    transactions: 'transactions',
    rules: 'rules',
    compoundRules: 'compound-rules',
    error: 'error'
}

const routes: Routes = [
    {
        path: paths.home,
        component: HomeComponent
    },    
    {
        path: paths.transactions,
        component: TransactionsComponent
    },
    {
        path: paths.rules,
        component: RulesComponent
    },
    {
        path: paths.createTransaction,
        component: CreateTransactionsComponent
    },    
    {
        path: paths.error,
        pathMatch: 'full',
        component: ErrorPageComponent,
    },
    { path: '**', pathMatch: 'full', redirectTo: paths.error },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }