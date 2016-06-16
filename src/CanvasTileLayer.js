import { tileLayer } from 'leaflet';

import BaseTileLayer from './BaseTileLayer';

export default class CanvasTileLayer extends BaseTileLayer {
  componentWillMount() {
    super.componentWillMount();
    const props = this.props;
    this.leafletElement = tileLayer.canvas(props);
  }
}
