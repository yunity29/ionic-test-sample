import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1Page } from './tab1.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async(() => {

    // テスト用モジュールの上でテスト対象のコンポーネントをテストする
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    // テスト対象のコンポーネントをインスタンス化する。
    // テスト対象のコンポーネントとやりとりするのに必要。
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('title 初期値', () => {

    // セレクターで検証したいエレメントを抽出する
    const element = fixture.debugElement.query(By.css('ion-content ion-title'));
    // jasmineのテストメソッドで比較する
    expect(element.nativeElement.innerText).toEqual('Tab 1');
    // コンポーネントのメソッドを呼び出して検証する
    expect(component.returnTitle()).toEqual('return Tab 1');
  });

  // titleの値を変更した後の検証
  it('title = サンプル', () => {
    component.title = 'サンプル';
    // データバインディングを実行します。
    fixture.detectChanges();

    // titleに'サンプル'を設定し、データバインディングした状態で検証する
    const element = fixture.debugElement.query(By.css('ion-content ion-title'));
    expect(element.nativeElement.innerText).toEqual('サンプル');
    expect(component.returnTitle()).toEqual('return サンプル');
  });
});
