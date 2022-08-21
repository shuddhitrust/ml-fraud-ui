import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleFormComponent } from './components/forms/rule-form/rule-form.component';
import { TransactionFormComponent } from './components/forms/transaction-form/transaction-form.component';
import { ErrorPageComponent } from './components/pages/error-page/error.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RulesComponent } from './components/tables/rules/rules.component';
import { TransactionsComponent } from './components/tables/transactions/transactions.component';

export const paths = {
    home: '',
    createTransaction: 'create-transaction',
    createRule: 'create-rule',
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
        component: TransactionFormComponent
    },
    {
        path: paths.createRule,
        component: RuleFormComponent
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