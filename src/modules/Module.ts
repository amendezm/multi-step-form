export class Module {
  protected _title = ""
  protected _description = ""
  protected _renderElement: JSX.Element | null = null

  public get title(): string {
    return this._title
  }

  public get description(): string {
    return this._description
  }

  public get renderElement(): JSX.Element | null {
    return this._renderElement
  }

  public set title(value: string) {
    this._title = value
  }

  public set description(value: string) {
    this._description = value
  }

  public set renderElement(value: JSX.Element | null) {
    this._renderElement = value
  }
}
